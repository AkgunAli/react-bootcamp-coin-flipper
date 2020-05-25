import React, {Component} from 'react';
import "./CoinFlipperStyles.css";
import Coin from "./Coin";
import { Button } from 'reactstrap';

const options = ["Yazı", "Tura" ];

const getRandomElFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem =  arr[randomIndex];
  return randomItem;
};

class CoinFlipper extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentStatus: options[0],
            gelenler: [],
            donuyor: false,
            
        }
    }

    



    

    atisYap = () => {
        this.setState({
            donuyor: true
        });
        const rastgeleEleman = getRandomElFromArr(options);
        setTimeout(() => {
            this.setState({
                currentStatus: rastgeleEleman,
                gelenler: [...this.state.gelenler, rastgeleEleman],
                donuyor: false
                
            })
        }, 1000);
    }

 


    render() {
        const {currentStatus, donuyor, gelenler} = this.state;
    
    
    
        const turagelsin = gelenler.filter(item => item ==="Tura");
       const  turageldi= turagelsin.length;

       const yazigelsin = gelenler.filter(item => item ==="Yazı");
       
       const  yazigeldi = yazigelsin.length;

        return (
            <div>
                <h1>
                Coin Flipper <br/>
                " Head Or Tails "
                </h1>
                <Coin currentStatus={currentStatus} donuyor={donuyor}/>
                <br/>
                <Button onClick={this.atisYap }color="danger">ATIŞ YAP!</Button>

                {
                    gelenler.length > 0 && !donuyor && <h3>{currentStatus} geldi!</h3>
                }
                <br/>
                <h4>
                        Toplam Atılan Para Sayısı : {gelenler.length}
                </h4>
                <h4>
                        Toplam Atılan Tura Sayısı : {turageldi}
                </h4>
                <h4>
                        Toplam Atılan Yazı Sayısı : {yazigeldi}
                </h4>


                
            </div>
        );
    }
}

export default CoinFlipper;