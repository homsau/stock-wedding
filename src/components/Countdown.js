import React, { Component } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      num: 3,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div className="Countdown">
        <span className="Countdown-col increment">
          <span className="Countdown-col-element">
              <strong>{this.addLeadingZeros(countDown.days)}</strong>
              <span>{countDown.days === 1 ? 'Day' : 'Day(s)'}</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
              <strong>:</strong>
          </span>
        </span>
        
        <span className="Countdown-col increment">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.hours)}</strong>
            <span>{countDown.hours === 1 ? 'Hour' : 'Hour(s)'}</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
              <strong>:</strong>
          </span>
        </span>

        <span className="Countdown-col increment">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.min)}</strong>
            <span>{countDown.min === 1 ? 'Minute' : 'Minute(s)'}</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="Countdown-col-element">
              <strong>:</strong>
          </span>
        </span>
        
        <span className="Countdown-col increment">
          <span className="Countdown-col-element">
            <strong>{this.addLeadingZeros(countDown.sec)}</strong>
            <span>{countDown.sec === 1 ? 'Sec' : 'Sec(s)'}</span>
          </span>
        </span>
      </div>
    );
  }
}

// Countdown.propTypes = {
//   date: PropTypes.string.isRequired
// };

Countdown.defaultProps = {
  date: new Date('2025, 10, 10')
};

export default Countdown;