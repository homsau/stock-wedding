import React, { Component } from 'react';

class CountdownDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdownDay(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdownDay(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      days: 0
    };

    // calculate time difference between now and expected date
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
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
      <span className="CountdownDay">
        <span className="CountdownDay-col increment">
          <span className="CountdownDay-col-element"> 
          {/* change conditional to make it so 0<day<1 will work below */}
              <span><strong>{this.addLeadingZeros(countDown.days)}</strong>&nbsp;{countDown.days === 1 ? 'Day' : 'Day(s)'}&nbsp;to&nbsp;go!</span>
          </span>
        </span>
      </span>
    );
  }
}

// Countdown.propTypes = {
//   date: PropTypes.string.isRequired
// };

CountdownDay.defaultProps = {
  date: new Date('2024, 10, 10')
};

export default CountdownDay;