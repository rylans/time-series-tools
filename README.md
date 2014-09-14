Time Series Tools
=================

Functions for time series analysis and ARIMA models

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

### Summary statistics
* ~~mean~~ **Done**
* ~~median~~ **Done**
* range
* interquartile range
* ~~standard deviation~~ **Done**
* ~~variance~~ **Done**
* skewness
* kurtosis
* maximum
* minimum
* sum

### R functions
* lagged time series `lag(ts, k)`
* ~~difference the time series `diff(ts)`~~ **Done**
* autocorrelation `acf(ts)`
* partial autocorrelation `pacf(ts)`
* exponential smoothing state space model (forecast) `ets(ts)`
* simple exponential smoothing `ses(ts)`