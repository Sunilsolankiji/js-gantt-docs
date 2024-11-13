import styles from "./styles.module.css";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <p className={styles.para}>
            Welcome to the documentation for javascriptgantt chart library. This library
            provides a powerful set of tools and functionalities to create
            interactive Gantt charts for project management. This documentation
            will guide you through the installation process, usage instructions,
            and available features of the library.
          </p>
          <iframe height="500" width="100%" src="https://sunilsolankiji.github.io/javascriptgantt/" allowFullScreen />
        </div>
      </div>
    </section>
  );
}
