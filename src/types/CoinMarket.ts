export interface CoinMarketType {
    circulating_supply: number;
    cmc_rank: number;
    date_added: Date;
    id: number;
    infinite_supply: null;
    last_updated: Date;
    max_supply: number;
    name: string;
    num_market_pairs: number;
    platform: null;
    quote: {
      [key: string]: QuoteType;
    };
    self_reported_circulating_supply: null;
    self_reported_market_cap: null;
    slug: string;
    symbol: string;
    tags: string[];
    total_supply: number;
  }
  
  export interface QuoteType {
    fully_diluted_market_cap: number;
    last_updated: Date;
    market_cap: number;
    market_cap_dominance: number;
    percent_change_1h: null;
    percent_change_7d: null;
    percent_change_24h: null;
    price: number;
    volume_24h: number;
    volume_change_24h: null;
  }
  