import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function WeatherData(props) {
    const [weatherData, setWeatherData] = useState({
        cityName: '',
        weatherDescription: '',
        weatherIcon: '',
        temperature: 0,
        humidity: 0
    });

    //Need to fix this
    const apiKey = '';

    useEffect(() => {
        console.log(props)
        if (props.coordinates.lat && props.coordinates.lon) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                    // Extract specific data from the JSON response
                    const extractedData = {
                        cityName: data.name,
                        weatherDescription: data.weather[0].description,
                        weatherIcon: data.weather[0].icon,
                        temperature: data.main.temp,
                        humidity: data.main.humidity
                    };

                    // Set the extracted data in the weatherData state
                    setWeatherData(extractedData);
                    console.log(data);
                })
                .catch((error) => {
                    console.error('API request failed:', error);
                });
        }
    }, [props.coordinates.lat, props.coordinates.lon, apiKey, props]);

    return (
        <Card>
            <Card.Header>Weather Information</Card.Header>
            <Card.Body>
                {props.coordinates.lat && props.coordinates.lon ? (
                    <Row>
                        <Col>
                            <p>City: {props.coordinates.name}</p>
                            <p>Temperature: {weatherData.temperature}°C</p>
                        </Col>
                        <Col>
                            <p>Weather: {weatherData.weatherDescription}</p>
                            <p>Humidity: {weatherData.humidity}%</p>
                        </Col>
                    </Row>
                ) : (
                    <p>Have not received data yet</p>
                )}
            </Card.Body>
        </Card>
    );
}

export default WeatherData;
