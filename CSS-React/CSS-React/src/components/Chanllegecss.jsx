import styles from './Desafio.module.css';

const Chanllegecss = ({ id, brand, color, km }) => {
  return (
    <div>
        <ul>
            <li style={ {backgroundColor: "red", color: "white"} }>id: {id}</li>
            <li className={styles['car-brand']}>Marca: {brand}</li>
            <li className={styles['car-color']}>Cor: {color}</li>
            <li className={styles['car-km']}>KM: {km}</li>
        </ul>
    </div>
  );
};

export default Chanllegecss;