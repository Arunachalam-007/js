/* eslint-disable semi */
/*eslint-disable*/
import { currencies } from "./currency.js";
import { getOptions } from "./handler.js";
import { myFunction } from "./money.js";

const primaryCurrency = document.getElementById("first");
const secondaryCurrency = document.getElementById("second");
primaryCurrency.innerHTML = getOptions(currencies);
secondaryCurrency.innerHTML = getOptions(currencies);
document.getElementById("amt").addEventListener("change", myFunction);
