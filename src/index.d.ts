declare module 'sxored.js' {
  export interface SatelliteConfig {
    apiKey: string;
    baseURL?: string;
  }

  export interface SatelliteResult {
    // Define the structure of your API response here
    success: boolean;
    data: any;
  }

  export default class Satellite {
    constructor(config: SatelliteConfig);

    // Personal Information
    extractIdCard(file: File): Promise<SatelliteResult>;
    extractPaySlip(file: File): Promise<SatelliteResult>;
    extractDeed(file: File): Promise<SatelliteResult>;

    // Financial Information
    extractBankStatement(file: File, password: String): Promise<SatelliteResult>;
    reExtractBankStatement(file: File, password: String): Promise<SatelliteResult>;
    extractSLIK(file: File): Promise<SatelliteResult>;

    // Collateral Information
    extractPBB(file: File): Promise<SatelliteResult>;
    findNearestPlace(data: Record<string, any>): Promise<SatelliteResult>;
    findOrmas(data: Record<string, any>): Promise<SatelliteResult>;
    housePrice(data: Record<string, any>): Promise<SatelliteResult>;
    housePriceExtend(data: Record<string, any>): Promise<SatelliteResult>;
  }
}