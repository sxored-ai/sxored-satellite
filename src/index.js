// Personal Information
import extractIdCard from './modules/personal_info/extractIdCard';
import extractPaySlip from './modules/personal_info/extractPayslip';
import extractDeed from './modules/personal_info/extractDeed';

// Financial Information
import extractBankStatement from './modules/financial_info/extractBankStatement';
import reExtractBankStatement from './modules/financial_info/reExtractBankStatement';
import extractSLIK from './modules/financial_info/extractSlikOjk';

// Collateral Information
import extractPBB from './modules/collateral_info/extractPbb';
import findNearestPlace from './modules/collateral_info/findNearestPlace';
import findOrmas from './modules/collateral_info/findOrmas';
import housePrice from './modules/collateral_info/housePrice';
import housePriceExtend from './modules/collateral_info/housePriceExtend';

// Utilities
import checkHoliday from './modules/utilities/checkHoliday';

class Satellite {
  constructor(config) {
    this.apiBaseUrl = 'https://api.sxored.com'
    this.apiKey = config.apiKey
  }

  // Personal Information
  extractIdCard = (file) => extractIdCard(this.apiBaseUrl, this.apiKey, file);
  extractPaySlip = (file) => extractPaySlip(this.apiBaseUrl, this.apiKey, file);
  extractDeed = (file) => extractDeed(this.apiBaseUrl, this.apiKey, file);

  // Financial Information
  extractBankStatement = (file, password) => extractBankStatement(this.apiBaseUrl, this.apiKey, file, password);
  reExtractBankStatement = (file, password) => reExtractBankStatement(this.apiBaseUrl, this.apiKey, file, password);
  extractSLIK = (file) => extractSLIK(this.apiBaseUrl, this.apiKey, file);

  // Collateral Information
  extractPBB = (file) => extractPBB(this.apiBaseUrl, this.apiKey, file);
  findNearestPlace = (data) => findNearestPlace(this.apiBaseUrl, this.apiKey, data);
  findOrmas = (data) => findOrmas(this.apiBaseUrl, this.apiKey, data);
  housePrice = (data) => housePrice(this.apiBaseUrl, this.apiKey, data);
  housePriceExtend = (data) => housePriceExtend(this.apiBaseUrl, this.apiKey, data);

  // Utilities
  checkHoliday = (data) => checkHoliday(this.apiBaseUrl, this.apiKey, data);
}

export default Satellite;