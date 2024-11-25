class Snowflake {
  constructor(datacenterId, workerId) {
    if (datacenterId < 0 || datacenterId > this.maxDatacenterId) {
      throw new Error(
        `datacenterId must be between 0 and ${this.maxDatacenterId}`
      );
    }
    if (workerId < 0 || workerId > this.maxWorkerId) {
      throw new Error(`workerId must be between 0 and ${this.maxWorkerId}`);
    }
    this.datacenterId = datacenterId;
    this.workerId = workerId;
    this.sequence = 0;
    this.lastTimestamp = -1;

    this.datacenterIdBits = 5;
    this.workerIdBits = 5;
    this.sequenceBits = 12;

    this.maxDatacenterId = -1 ^ (-1 << this.datacenterIdBits);
    this.maxWorkerId = -1 ^ (-1 << this.workerIdBits);
    this.maxSequence = -1 ^ (-1 << this.sequenceBits);

    this.workerIdShift = this.sequenceBits;
    this.datacenterIdShift = this.sequenceBits + this.workerIdBits;
    this.timestampLeftShift =
      this.sequenceBits + this.workerIdBits + this.datacenterIdBits;

    this.epoch = 1577836800000; // Custom epoch (January 1, 2020)
  }

  generateId() {
    let timestamp = this.currentTime();

    if (timestamp < this.lastTimestamp) {
      throw new Error("Clock moved backwards. Refusing to generate id");
    }

    if (timestamp === this.lastTimestamp) {
      this.sequence = (this.sequence + 1) & this.maxSequence;
      if (this.sequence === 0) {
        timestamp = this.waitNextMillis(timestamp);
      }
    } else {
      this.sequence = 0;
    }

    this.lastTimestamp = timestamp;

    return (
      ((timestamp - this.epoch) << this.timestampLeftShift) |
      (this.datacenterId << this.datacenterIdShift) |
      (this.workerId << this.workerIdShift) |
      this.sequence
    );
  }

  waitNextMillis(timestamp) {
    while (timestamp === this.currentTime()) {
      // Busy-wait
    }
    return this.currentTime();
  }

  currentTime() {
    return Date.now();
  }
}

// Ejemplo de uso
const datacenterId = 1; // ID del centro de datos (0-31)
const workerId = 1; // ID del trabajador (0-31)
const snowflake = new Snowflake(datacenterId, workerId);

const uniqueId = snowflake.generateId();
console.log("ID único generado:", uniqueId);
