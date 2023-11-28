"use client";

export function LocalTimeText() {
  function getLocalDateFormatted() {
    // Obtém a data e hora locais
    const now = new Date();

    // Cria um objeto Intl.DateTimeFormat com o fuso horário de Lisboa (GMT+1)
    const options = { timeZone: "Europe/Lisbon" };
    const datetimeToFormat = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
      ...options,
    });

    // Formata a data e hora
    const formattedDate = datetimeToFormat.format(now);

    return formattedDate;
  }

  return <p>{getLocalDateFormatted()}+1</p>;
}
