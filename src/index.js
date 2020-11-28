class template extends React.Component {
    render() {
      return (
        <div>
           BSCS-31E1{this.props.name}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <HelloMessage name="Mikaela L. Jintalan" />,
    document.getElementById('hello-example')
  );