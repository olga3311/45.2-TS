export default function SpaceMission() {
  const shipName: string = "Apollo 12";
  const crewCount: number = 3;
  const missionStarted: boolean = true;
  const crewNames: string[] = ["Нил Армстронг", "Майкл Коллинз", "Базз Олдрин"];
  const captain: readonly [string, number] = ["Нил Армстронг", 39];

  function startMission(name: string): string {
    return `Миссия ${name} началась!`;
  }

  return (
    <div>
      <h2>Название миссии: {shipName}</h2>
      <p>Экипаж: {crewCount} человека</p>
      <ul>
        {crewNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <p>
        Капитан миссии: {captain[0]}, возраст: {captain[1]} лет
      </p>
      <p>Сообщение: {startMission(shipName)}</p>
    </div>
  );
}
