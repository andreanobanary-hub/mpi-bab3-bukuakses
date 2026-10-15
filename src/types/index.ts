export type DimensionType = 'courage' | 'time' | 'teamwork' | 'resilience' | 'ethics';

export interface AssessmentItem {
  id: number;
  text: string;
  dimension: DimensionType;
  dimensionLabel: string;
}

export interface DimensionScore {
  dimension: DimensionType;
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
  description: string;
  recommendation: string;
}

export interface AssessmentCategory {
  title: string;
  badge: string;
  range: string;
  summary: string;
  counselorNarration: string;
  actionTips: string[];
}

export interface ReflectionJournal {
  strengthDimension: string;
  biggestHesitation: string;
  smallActionHabit: string;
  ethicalCommitment: string;
}

export interface ComicScenario {
  id: string;
  title: string;
  situasi: string;
  karakterDeni: {
    nama: string;
    tipe: string;
    reaksi: string;
    dampak: string;
  };
  karakterRania: {
    nama: string;
    tipe: string;
    reaksi: string;
    dampak: string;
  };
  pertanyaanPemantik: string[];
  catatanGuruBK: string;
}

export interface CharacteristicItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  contohRemaja: string;
  iconName: string;
}

export interface FigureProfile {
  id: string;
  name: string;
  role: string;
  venture: string;
  background: string;
  perjuanganRemaja: string;
  kunciSukses: string[];
  pesanMoral: string;
}

export interface OpportunityCanvasData {
  teamName: string;
  businessName: string;
  problemStatement: string;
  targetUser: string;
  proposedSolution: string;
  uniqueValue: string;
  initialResources: string;
  marketingEthics: string;
}

export interface RolePlayCharacter {
  roleId: string;
  roleName: string;
  actorTitle: string;
  personality: string;
  keyObjective: string;
  tipsKomunikasi: string[];
}

export interface RolePlayDialogue {
  id: number;
  scene: number;
  sceneTitle: string;
  speaker: string;
  role: string;
  line: string;
  stageNote?: string;
  counselorInsight?: string;
}

export interface RubricCriterion {
  id: string;
  title: string;
  description: string;
  levels: {
    score: number;
    label: string;
    descriptor: string;
  }[];
}
