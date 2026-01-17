
export interface AdmissionStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  iconBgColor: string;
  iconTextColor: string;
}

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}
