import style from "@/styles/components/modal.module.scss";
import useModalStore from "../store/modal-store";
import GetLocalStorage from "./locale-storage/get-local-storage";
import { useEffect, useState, useCallback } from "react";
import useTaskStore from "../store/task-store";

const Modal = () => {
  const { isOpen, setIsOpen } = useModalStore();
  const { tasks, addTask, removeTask, toggleTask } = useTaskStore();
  const [newTask, setNewTask] = useState("");

  const clickDayStorage = GetLocalStorage("clickDay");

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          handleCloseModal();
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "auto";
      };
    }
  }, [isOpen, handleCloseModal]);

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleOverlayClick = () => {
    handleCloseModal();
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    addTask(`${newTask[0].toUpperCase()}${newTask.slice(1)}`);
    setNewTask("");
  };

  const handleEnterKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  if (!isOpen) return null;
  if (!clickDayStorage) return null;

  return (
    <div className={style.modal} onClick={handleOverlayClick}>
      <div className={style.modal_container} onClick={handleModalClick}>
        <header className={style.modal_header}>
          {clickDayStorage && `${clickDayStorage}`}
          <button type="button" onClick={handleCloseModal}>
            Закрыть
          </button>
        </header>

        <ul className={style.modal_tasks}>
          {tasks.map(task => (
            <li className={style.modal_task} key={task.id}>
              {task.id.startsWith(clickDayStorage) && (
                <>
                  <span
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                    onClick={() => toggleTask(task.id)}
                  >
                    {task.text}
                  </span>
                  <button type="button" onClick={() => removeTask(task.id)}>
                    Удалить
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>

        <div className={style.modal_add}>
          <input
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="Добавьте новую задачу"
            className={style.modal_add_input}
            onKeyDown={handleEnterKeyPress}
          />
          <button type="button" onClick={handleAddTask}>
            Добавить задачу
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
