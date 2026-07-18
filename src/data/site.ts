import {
  BarChart3, Boxes, BriefcaseBusiness, Building2, Church, Coffee, FileText,
  Globe2, Headphones, Landmark, LayoutDashboard, PackageCheck, RefreshCcw,
  Settings2, ShoppingBag, SolarPanel, UsersRound, Warehouse, Workflow,
} from 'lucide-react'

export const company = {
  name: 'YOUR ERP COMPANY',
  workingLabel: 'Working identity — replace before launch',
  location: 'Addis Ababa, Ethiopia',
  phone: '',
  email: '',
  whatsapp: '',
  description: 'Custom ERP systems, business applications and professional websites designed around real Ethiopian business workflows.',
}

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Coffee ERP', to: '/coffee-erp' },
  { label: 'Industries', to: '/industries' },
  { label: 'Process', to: '/process' },
  { label: 'Our Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
]

export const services = [
  { icon: LayoutDashboard, title: 'Custom ERP Development', text: 'Business systems shaped around your departments, approvals, documents, reporting and daily operating rules.', number: '01' },
  { icon: Coffee, title: 'Coffee Export ERP', text: 'A focused operational system for purchasing, warehouse control, processing, contracts, export documents and reports.', number: '02' },
  { icon: Warehouse, title: 'Inventory & Warehouse', text: 'Control receipts, issues, balances, transfers, adjustments, item histories and user accountability.', number: '03' },
  { icon: Workflow, title: 'Business Automation', text: 'Replace repeated paper, spreadsheet and message-based work with structured digital workflows.', number: '04' },
  { icon: UsersRound, title: 'CRM & Sales Systems', text: 'Organise leads, customer records, follow-ups, quotations, pipelines and sales reporting.', number: '05' },
  { icon: FileText, title: 'Document Management', text: 'Manage templates, uploads, versions, approvals, search and PDF, Excel or Word exports.', number: '06' },
  { icon: BarChart3, title: 'Reports & Dashboards', text: 'Give management a clear view of operations, performance, exceptions and audit activity.', number: '07' },
  { icon: Globe2, title: 'Websites & Portals', text: 'Build professional websites, customer portals, internal applications and content-managed platforms.', number: '08' },
  { icon: Headphones, title: 'Support & Training', text: 'Prepare users, migrate data, document the system and provide structured post-launch assistance.', number: '09' },
]

export const industries = [
  { icon: Coffee, title: 'Coffee Exporters', text: 'Purchases, warehouse stock, processing, export contracts, bags, documents and management reports.' },
  { icon: BriefcaseBusiness, title: 'Import & Export', text: 'Contracts, shipments, documents, customer records, approvals and operational visibility.' },
  { icon: Warehouse, title: 'Warehouses & Distributors', text: 'Receipts, issues, transfers, balances, accountability, order preparation and reporting.' },
  { icon: PackageCheck, title: 'Agrochemical Companies', text: 'Product movement, dealer records, inventory, sales follow-up and compliance documentation.' },
  { icon: SolarPanel, title: 'Solar & Electronics', text: 'Product stock, sales, installations, service history, customer records and quotations.' },
  { icon: Landmark, title: 'NGOs & Associations', text: 'Projects, requests, approvals, documents, assets, reporting and activity records.' },
  { icon: Church, title: 'Churches & Organisations', text: 'Finance workflows, requests, membership records, approvals, assets and transparent reporting.' },
  { icon: Building2, title: 'Growing SMEs', text: 'A phased system that starts with essential operations and expands with the company.' },
]

export const processSteps = [
  { number: '01', title: 'Discovery', text: 'Understand the business, users, existing tools, bottlenecks and expected results.' },
  { number: '02', title: 'Process Mapping', text: 'Document how work currently moves and identify where control, speed and visibility can improve.' },
  { number: '03', title: 'Scope & Proposal', text: 'Define modules, responsibilities, delivery phases, assumptions, timeline and cost.' },
  { number: '04', title: 'Design & Prototype', text: 'Create the information architecture, workflow design and key interface screens for review.' },
  { number: '05', title: 'Development & Testing', text: 'Build in controlled stages and test rules, permissions, calculations, documents and reports.' },
  { number: '06', title: 'Migration, Training & Launch', text: 'Prepare approved data, train users, deploy the system and support the first live operations.' },
  { number: '07', title: 'Support & Improvement', text: 'Resolve issues, review usage and introduce approved enhancements without disrupting core data.' },
]

export const caseStudies = [
  { category: 'Coffee Export', title: 'Coffee Operations ERP', status: 'Working demo', problem: 'Operational data spread across purchase, warehouse, processing and export records.', modules: ['Purchases', 'Warehouse', 'Processing', 'Contracts', 'Documents', 'Reports'], icon: Coffee },
  { category: 'Inventory', title: 'Warehouse Control System', status: 'Demonstration', problem: 'Unclear balances and weak traceability across receipts, issues and adjustments.', modules: ['Receipts', 'Issues', 'Transfers', 'Balances', 'Audit history'], icon: Boxes },
  { category: 'Sales', title: 'CRM & Follow-up System', status: 'Working demo', problem: 'Leads and follow-ups distributed across phone notes, spreadsheets and chat applications.', modules: ['Contacts', 'Pipeline', 'Follow-ups', 'Calling queue', 'Reports'], icon: UsersRound },
  { category: 'Organisation', title: 'Internal Operations ERP', status: 'Prototype', problem: 'Requests, approvals and financial records managed through disconnected manual processes.', modules: ['Requests', 'Approvals', 'Finance', 'Assets', 'Activity log'], icon: Landmark },
  { category: 'Web', title: 'Professional Business Website', status: 'Service', problem: 'A business needs a modern, fast and manageable online presence that supports enquiries.', modules: ['Responsive UI', 'SEO basics', 'CMS-ready content', 'Contact flow'], icon: Globe2 },
]

export const faqs = [
  ['What types of ERP systems do you build?', 'We build custom operational systems for inventory, warehouse, sales, documents, reporting, coffee export and organisation-specific workflows.'],
  ['Can the system follow our existing workflow?', 'Yes. The project starts by mapping your current process, identifying risks and agreeing where the software should preserve or improve the workflow.'],
  ['How much does a custom ERP cost?', 'ERP pricing depends on the number of modules, users, data migration needs, reports, integrations and support scope. A quotation is prepared after the workflow assessment.'],
  ['How long does development take?', 'The schedule depends on scope and approval speed. A focused first version is normally delivered in phases rather than waiting for every future feature.'],
  ['Can you import our Excel data?', 'Existing data can be reviewed, cleaned and migrated when its structure and quality are suitable. Migration rules are agreed before import.'],
  ['Can the system generate PDF, Excel and Word documents?', 'Yes, document and export requirements can be included in the project scope. Exact layout preservation and editable Word generation require specific technical design.'],
  ['Can it work on mobile phones?', 'The systems are designed to be responsive. Complex operational tables may use simplified mobile views to remain usable.'],
  ['Can it be hosted on our own server?', 'Cloud, customer-controlled cloud and local-server options can be evaluated based on connectivity, maintenance capacity, backup needs and security requirements.'],
  ['Who owns our business data?', 'Data ownership, source-code rights, hosting access, backup access and handover responsibilities should be clearly stated in the project agreement.'],
  ['Do you provide training and support?', 'Training, user documentation, launch assistance and post-launch support can be included according to the agreed service package.'],
  ['Can more modules be added later?', 'Yes. The architecture should support phased expansion, provided new features are reviewed for their effect on existing data and workflows.'],
  ['Do you also build websites?', 'Yes. We build professional business websites, customer portals and internal web applications. Branding and graphic-design packages are not part of this service.'],
]

export const dashboardStats = [
  { label: 'Operational modules', value: 'Connected', icon: RefreshCcw },
  { label: 'Document status', value: 'Trackable', icon: FileText },
  { label: 'Management reports', value: 'Available', icon: BarChart3 },
]

export const credibility = [
  'Based in Addis Ababa', 'Custom-built workflows', 'Mobile-friendly systems',
  'Training & support', 'Cloud or local deployment', 'Data export capability',
]

export const problems = [
  'Stock information cannot be trusted', 'Reports take too long to prepare',
  'The same documents are recreated manually', 'Approvals are difficult to track',
  'Information is spread across departments', 'Management cannot see current operations',
]

export const coffeeFlow = ['Supplier', 'Purchase', 'Warehouse', 'Processing', 'Export Contract', 'Export Documents', 'Reports']

export const whyUs = [
  { icon: Workflow, title: 'Built around your workflow', text: 'We understand the current process before recommending or developing a system.' },
  { icon: Landmark, title: 'Local business understanding', text: 'Solutions consider Ethiopian operating realities, support expectations and connectivity.' },
  { icon: UsersRound, title: 'Direct communication', text: 'Customers work directly with the people responsible for analysing and delivering the project.' },
  { icon: Settings2, title: 'Clear system control', text: 'Hosting, backup, access, data ownership and support responsibilities are documented.' },
  { icon: Headphones, title: 'Training and support', text: 'Users receive preparation, documentation and post-launch assistance based on the agreement.' },
  { icon: ShoppingBag, title: 'Scalable implementation', text: 'Start with essential modules and add approved capabilities as the business grows.' },
]
