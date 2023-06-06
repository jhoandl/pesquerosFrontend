export default class Staff {
  constructor(
    names,
    lastNames,
    documentNumber,
    documentType,
    startTime,
    timeEnd,
    companyId,
    position,
    date
  ) {
    this.names = names;
    this.lastNames = lastNames;
    this.documentNumber = documentNumber;
    this.documentType = documentType;
    this.startTime = startTime;
    this.timeEnd = timeEnd;
    this.company = companyId;
    this.position = position;
    this.date = date;
  }
}
