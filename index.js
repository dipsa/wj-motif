'use strict';

var css = require('./lib/styles.css');
var lanmaster = require('./config/lanmaster');

var alertDefault = css['alert-default'];
var alertInfo = css['alert-info'];
var alertWarning = css['alert-warning'];
var alertSuccess = css['alert-success'];
var alertDanger = css['alert-danger'];

var alerts = {
  alertDefault: css['alert-default'],
  alertInfo: css['alert-info'],
  alertWarning: css['alert-warning'],
  alertSuccess: css['alert-success'],
  alertDanger: css['alert-danger']
}

var alertAnimations = {
  enter: css['notification-enter'],
  leave: css['notification-leave']
}

module.exports = {
  alerts: alerts,
  alertAnimations: alertAnimations,
  tenants: {
    lanmaster: lanmaster
  }
};
