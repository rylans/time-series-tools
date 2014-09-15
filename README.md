Time Series Tools
=================

Functions for statistics, time series analysis and ARIMA models

## Usage

Install Jest

```
npm install jest-cli --save-dev
```

to run the tests:
```
npm test
```

## Planned features
I'm aiming for *100% test coverage* and the following features:

### Summary statistics
* ~~mean~~ **Done**
* ~~median~~ **Done**
* range
* interquartile range
* ~~standard deviation~~ **Done**
* ~~variance~~ **Done**
* covariance
* skewness
* kurtosis
* maximum
* minimum
* sum

### Fitting & regression
* ~~fit linear model~~ **Done**
* fit exponential model

### R functions
* lagged time series `lag(ts, k)`
* ~~difference the time series `diff(ts)`~~ **Done**
* autocorrelation `acf(ts)`
* partial autocorrelation `pacf(ts)`
* exponential smoothing state space model (forecast) `ets(ts)`
* simple exponential smoothing `ses(ts)`

### Time-series specific
* trend detection
* seasonality detection
* outlier detection
* detect if variance changes over time

### ARIMA related
* `ARIMA(1,0,0)` first-order autoregressive model
* `ARIMA(0,1,1)` simple exponential smoothing
* `ARIMA(1,1,1)` mixed

### `apply` or `map` style functions
* multiply all elements of list by a number
* add a number to all elements of the list
* take every element of the list to a power
* take the log of every element of the list
* `apply(ts, func)`