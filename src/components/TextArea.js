import  React from 'react';
import PropTypes from 'prop-types';


//textarea component
export default class TextArea extends React.Component {

  static defaultProps = {
    value: '',
    placeholder: 'Type your message... NOW'
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  }

  state = {
    value: this.props.value
  };

  handleChange = event => {
     this.setState({value: event.target.value});
  }
  
  render () {
    return (
      <textarea id={this.props.id} 
        placeholder={this.props.placeholder}
        name={this.props.name} 
        defaultValue={this.state.value} 
        onChange={this.handleChange} />
    );
  }
}