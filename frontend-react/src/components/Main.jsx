import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className="p-5 text-center bg-light-dark rounded">
                <h1 className='text-light'>Stock Prediction App</h1>
                <h4 className='text-light'>Welcome to Stock Oracle, your gateway to intelligent stock price forecasting.</h4>
                <p className='text-light lead'>
                    This application utilizes cutting-edge machine learning techniques, specifically employing Keras with an LSTM model, integrated seamlessly within the Django framework. By analyzing crucial market data, including 100-day and 200-day moving averages, Stock Oracle delivers powerful insights into future stock price movements. These indicators are key metrics used by financial analysts worldwide to support informed trading and investment decisions.
                </p>
                <Button text="Login" class="btn-info"  url="/login" />
            </div>
        </div>
    </>
  )
}

export default Main