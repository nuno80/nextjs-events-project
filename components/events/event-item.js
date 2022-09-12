import Link from 'next/link';

//carichiamo il css scritto in event-item.module.css ed assegnamolo ad una variabile classes (posso usare qualsias inome, ma si usa classes oppure styles). Ricorda che queste classi css saranno utilizzabili solo in questo componente. Per utilizzarle ovunque devo scrivere il css nel file globall.css.
import classes from './event-item.module.css';

function EventItem(props) {
  //prendiamo gli elementi del Db che ci servono e li inseriamo in props
  const { title, image, date, location, id } = props;

  //formatiamo la data. date ora diventa humanReadableDate
  const humanReadableDate = new Date(date).toLocaleDateString('us-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  //formattiamo location: tutte le location hanno ', ' che sostituiamo con \n in modo da creare una brek line. location ora diventa formattedAddres
  const formattedAddress = location.replace(', ', '\n');

  //creiamo ora un link dinamico basato sugli id dei nostri events. Per farlo uso template literal e la prop id
  const exploreLink = `/events/${id}`;

  //la lista sarà creata usando gli elementi del DB inseriti nelle props in linea 5 e quelli modificati in linea 8 e 14
  //nb: per indicare il percorso delle immagini uso {'/' + image}. NEXT JS cercherà le immagini in public/image dove image è il nome assegnato alla props in linea 5
  return (
    <li className={classes.item}>
      <img svr={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href="/">Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
