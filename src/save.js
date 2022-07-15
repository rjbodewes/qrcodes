class App extends Component {
    constructor(props) {
      super(props);
      
      /* name = ssid, password = wifi password */
      this.state = {
        count:0,
        name: "",
        password: "",
      }
  
      this.handleNameChange = this.handleNameChange.bind(this)
      this.handlePasswordChange = this.handlePasswordChange.bind(this)
  
    }
  
    /* handles name change of network id */
    handleNameChange(event) {
      this.setState({name: event.target.value})
    };
  
    handlePasswordChange(event) {
      this.setState({password: event.target.value})
    };
  
    
    IncreaseCount = () => {
      this.setState({ count: this.state.count + 1 });
    }
  
    
    /* main render statement */
    render() {
      return (
        <div>
          <div>
            
          </div>
          <New />
  
          <div>{this.state.name}</div>
          <div>{this.state.password}</div>
          <input type="text" 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="username" 
          type="text" 
          placeholder="name"
          value={this.state.name}
          onChange={this.handleNameChange}/>
          <input type="text" 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="username" 
          type="text" 
          placeholder="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}/>
          <div>{this.state.count}</div>
          <button type="button" onClick={this.IncreaseCount} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">click me!</button>
        
        </div>
      );
    }
  
  }
  
  export default App;