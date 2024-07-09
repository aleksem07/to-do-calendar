import style from "@/styles/components/modal.module.scss";
import useModalStore from "../store/modal-store";
import GetLocalStorage from "./locale-storage/get-local-storage";
import { useEffect, useState } from "react";
import useTaskStore from "../store/task-store";

const Modal = () => {
  const { isOpen, setIsOpen } = useModalStore();
  const { tasks, addTask, removeTask, toggleTask } = useTaskStore();
  const [newTask, setNewTask] = useState("");

  const clickDayStorage = GetLocalStorage("clickDay");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleOverlayClick = () => {
    handleCloseModal();
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    addTask(newTask);
    setNewTask("");
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

        <div className={style.modal_content}>
          <input
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="Добавьте новую задачу"
          />
          <button type="button" onClick={handleAddTask}>
            Добавить задачу
          </button>

          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                {task.id.startsWith(clickDayStorage) && (
                  <>
                    <span
                      style={{
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
