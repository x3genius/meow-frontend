import { useParams } from 'react-router-dom';

export default function Pet() {
  const { id } = useParams();

  return (
    <div className="animal-card-page">
      <h1>Карточка животного #{id}</h1>
      <div className="animal-container">
        <div className="animal-photo">
          {/* Сюда потом пойдет картинка из S3 */}
          <div className="placeholder-img">Фото питомца</div>
        </div>
        <div className="animal-info">
          <h2>Кличка: Барсик</h2>
          <p><strong>Возраст:</strong> 1 год</p>
          <p><strong>Описание:</strong> Очень ласковый кот, любит спать на коленях.</p>
          <button className="btn-adopt">Взять домой</button>
        </div>
      </div>
    </div>
  );
}