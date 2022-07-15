import React, { Component } from 'react';

class New extends Component {

    constructor(props) {
        super();

        this.state = {
            img: [],
            some: '',
            website: '',
            showQR: false,
        };


        var self = this;
    
      
       

    


    }




    handleWebsiteChange(props) {
        if (this.props.name !== this.state.website) {
            this.setState({ website: this.props.name })
            return (this.state.website)
          } else {return (this.state.website)}
    };
    
    handleRenderClick(props) {
        if (this.props.show !== this.state.showQR) {
            this.setState({ showQR: this.props.show })

        } else {};
    };

    showqr(props) {
        if (this.state.showQR === true) {
            const sad = this.state.website

            var requestOptions = {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "qrcode-monkey.p.rapidapi.com",
                    "x-rapidapi-key": "84215c72a0msh38e8936aa615b8dp1fc0c8jsn70ebc34a0f9a"
                }, 
                
            };

            const image = fetch(`https://qrcode-monkey.p.rapidapi.com/qr/transparent?data=${sad}&size=300&y=0&crop=true&download=true&x=0`, requestOptions)
            .then(response => response.blob())
            .then(result => this.setState({ img: URL.createObjectURL(result) }))
            .catch(error => console.log('error', error));
            
            return (




                <div>
                    <img 
                    id="image" 
                    src={this.state.img} 
                    className="block mx-auto"/>
                    <div>{this.handleWebsiteChange()}</div>
                    <div>{sad}</div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }
      

    
    render() {
        return (
            <div>
                <div>{this.handleRenderClick()}</div>
                <div>{this.showqr()}</div>
            </div>
        );
    }
}



export default New;