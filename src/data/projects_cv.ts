export type LocalizedText = { en: string; es: string };
export type CVProject = {
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
  href?: string;
  image?: string;
  impact?: LocalizedText[];
};

export const cvProjects: CVProject[] = [
  {
    title: {
      en: 'Brewery Degermination Line Reliability Uplift',
      es: 'Confiabilidad Línea de Desgerminado (Cervecería)'
    },
    description: {
      en: 'AB InBev, La Paz–El Alto. Led maintenance + automation strategy, upgraded controls, tightened spares/KPIs. Impact: stoppages 30→4/month, MTBF 18h→165h, MTTR 6h→42min, >30% production (2× dispatch).',
      es: 'AB InBev, La Paz–El Alto. Estrategia de mantenimiento y automatización; upgrades de control; repuestos/KPIs. Impacto: 30→4 paradas/mes, MTBF 18h→165h, MTTR 6h→42min, >30% producción (2× despacho).'
    },
    tags: ['Automation', 'Reliability', 'KPI', 'PLC'],
    image: '/images/projects/degermination.svg',
  },
  {
    title: {
      en: 'Packaging Line Automation & Controls',
      es: 'Automatización y Control en Empaque'
    },
    description: {
      en: 'AB InBev, Santa Cruz. Modernized automation/controls and line improvements. Impact: +31% production in two years.',
      es: 'AB InBev, Santa Cruz. Modernización de automatización/control y mejoras de línea. Impacto: +31% producción en 2 años.'
    },
    tags: ['PLC', 'HMI', 'Automation'],
    image: '/images/projects/packaging.svg',
  },
  {
    title: {
      en: 'IIoT for Water Plants (KSA & Dubai)',
      es: 'IIoT para Plantas de Agua (KSA y Dubái)'
    },
    description: {
      en: 'Fogsphere (remote, UK). Teltonika gateways; MQTT (EMQX); OPC‑UA/Profinet/PCCC; Grafana; InfluxDB/MongoDB/PostgreSQL; Docker on Linux. Standardized acquisition/visualization for SWRO and municipal sites.',
      es: 'Fogsphere (remoto, UK). Teltonika; MQTT (EMQX); OPC‑UA/Profinet/PCCC; Grafana; InfluxDB/MongoDB/PostgreSQL; Docker en Linux. Estandarización de adquisición/visualización para SWRO y municipales.'
    },
    tags: ['IIoT', 'MQTT', 'OPC‑UA', 'Grafana'],
    image: '/images/projects/water-plants.svg',
  },
  {
    title: {
      en: 'Plant‑wide Energy Metering (Modbus RTU)',
      es: 'Medición Energética Planta (Modbus RTU)'
    },
    description: {
      en: 'AB InBev. IIoT system for 15 electrical meters with Grafana dashboards for energy & production KPIs. Real‑time visibility and cost tracking for utilities.',
      es: 'AB InBev. IIoT para 15 medidores eléctricos con dashboards Grafana de energía y KPIs de producción. Visibilidad en tiempo real y costos de utilidades.'
    },
    tags: ['Energy', 'Modbus', 'Grafana'],
    image: '/images/projects/energy-metering.svg',
  },
];
