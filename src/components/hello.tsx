import style from "@/styles/components/hello.module.scss";

const Hello = () => {
  return (
    <header>
      <h1 className="visually_hidden">ToDo Календарь для повседневных задач</h1>
      <h2 className={style.hello_title}>ToDo Календарь</h2>
    </header>
  );
};

export default Hello;
