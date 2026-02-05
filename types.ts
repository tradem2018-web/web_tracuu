export enum Language {
  VI = 'VI',
  EN = 'EN'
}

export interface NavItem {
  id: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export interface GuideStep {
  title: string;
  content: string;
}

export interface ContentData {
  nav: {
    home: string;
    features: string;
    guide: string;
    privacy: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    download: string;
    learnMore: string;
  };
  intro: {
    title: string;
    description: string;
    features: FeatureItem[];
    note: string;
  };
  guide: {
    title: string;
    steps: GuideStep[];
    tips: string;
    shareText: string;
    team: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: { title: string; content: string }[];
  };
  contact: {
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    infoText: string;
  };
  footer: {
    copyright: string;
  };
}