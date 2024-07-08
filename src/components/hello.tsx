import styles from "@/styles/components/hello.module.scss";

const Hello = () => {
  return (
    <div className={styles.hello}>
      <h1 className="visually_hidden">ToDo Календарь для повседневных задач</h1>
      <h2 className={styles.hello_title}>ToDo Календарь</h2>
    </div>
  );
};

export default Hello;
