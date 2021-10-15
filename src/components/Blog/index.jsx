import { h } from 'preact';
import Styles from './styles.module.scss';

function Blog({ project }) {
  const cut_date = project.published_at;
  const date = cut_date.replace( /-/g, '/' ).substring( 0, 10 );

  return (
    <a className={Styles.card} href={project.url}>
      {/* <div className={Styles.titleCard} style={`background-image:url(${project.img})`}>
      </div> */}
      <div className={Styles.link}>
        <h2 className={Styles.title}>{project.title}</h2>
        {/* <p className={Styles.desc}>{project.description}</p> */}
        <div className={Styles.flex}>
          <div className={Styles.tags}>
            {/* Tagged: */}
            {project.tags.map((t) => (
              <span className={Styles.tag} data-tag={t}>
                {t}
              </span>
            ))}
          </div>
          <p className={Styles.date}>
            Date:
            {date}
          </p>
        </div>
        {/* <a className={Styles.link} href={project.url}>
          <span className={Styles.linkInner}>View</span>
        </a> */}
      </div>
    </a>
  );
}

export default Blog;
