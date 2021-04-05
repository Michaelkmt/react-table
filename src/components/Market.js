import React  from "react";

export class Market extends React.Component {
    render(){
        return(
                <div>
                                {/* <div className="head">
                                <h3>Brand</h3>
                                    <h3>Year</h3>
                                    <h3>Engine</h3>
                                    <h3>Horse Power</h3>
                                    <h3>Gear</h3>
                                    <h3>Photo</h3>

                                </div>
                                   
                            <div className="elements"> */}

                            {/* <p className="car">{this.props.carId}</p>
                     
                     <p className="car">{this.props.carYear}</p>

                     <p className="car">{this.props.carEngine}</p>
                    
                     <p className="car">{this.props.carPower}</p>
                     
                     <p className="car">{this.props.carType}</p>

                     <img className="carImg" src={this.props.carPhoto} alt={this.props.carId}/> */}



    <table id="user_table">

        <tbody>
    <tr>
        <th>Brand</th>
        <th>Year</th>
        <th>Engine</th>
        <th>Horse Power</th>
        <th>Gear</th>
        <th>Photo</th>
    </tr>
    <tr>
        <td>{this.props.carId}</td><td>{this.props.carYear}</td><td>{this.props.carEngine}</td><td>{this.props.carPower}</td><td>{this.props.carType}</td><td><img className="carImg" src={this.props.carPhoto} alt={this.props.carId}/></td>
    </tr>
  

    </tbody>
</table>
                                
    </div>   
                
        )
    }
}