/** GBIF.org design system — window.GBIF (React 18). */
import * as React from "react";
export interface ButtonProps { variant?: 'outline' | 'primary' | 'grey' | 'grey-outline'; size?: 's' | 'm' | 'l'; shape?: 'rect' | 'pill'; icon?: string; disabled?: boolean; type?: 'button' | 'submit'; onClick?: () => void; children: React.ReactNode }
export interface NavArrowProps { direction: 'prev' | 'next'; onClick?: () => void }
export interface SocialLinksProps { networks?: Array<'facebook' | 'youtube' | 'instagram' | 'vimeo' | 'linkedin' | 'twitter'> }
export interface TextLinkProps { href?: string; children: React.ReactNode }
export type ContentType = 'news' | 'event' | 'data-use' | 'project' | 'programme' | 'tool' | 'document' | 'occurrence-dataset' | 'checklist-dataset' | 'publisher' | 'species' | 'page' | 'resource';
export interface PillProps { type?: ContentType; icon?: string; children?: React.ReactNode }
export interface TypeLabelProps { type?: ContentType; icon?: string; children?: React.ReactNode }
export interface TagProps { children: React.ReactNode }
export interface CountTagProps { icon?: string; children: React.ReactNode }
export interface DOIProps { doi: string; href?: string }
export interface OperatorTagProps { variant?: 'grey' | 'green' | 'outline'; children?: React.ReactNode }
export interface ChipProps { state?: 'enabled' | 'hover' | 'selected' | 'disabled'; onClick?: () => void; children: React.ReactNode }
export interface FilterChipProps { onRemove?: () => void; children: React.ReactNode }
export interface TooltipProps { children: React.ReactNode }
export interface SearchBarProps { variant?: 'raised' | 'flat' | 'outline'; size?: 's' | 'm'; placeholder?: string; value?: string; label?: string }
export interface FilterTabProps { size?: 's' | 'm' | 'l'; open?: boolean; children: React.ReactNode }
export interface ToggleProps { checked?: boolean; size?: 's' | 'm'; label: string; showLabel?: boolean }
export interface CheckboxProps { checked?: boolean; size?: 's' | 'm'; label?: string; meta?: string }
export interface SelectProps { options: string[]; value?: string; open?: boolean }
export interface RadioGroupProps { legend?: string; name?: string; options: string[]; value?: string }
export interface FilterPanelProps { title?: string; children: React.ReactNode }
export interface FilterPopoverProps { title?: string; dense?: boolean; items: Array<{ label: string; meta?: string; checked?: boolean }> }
export interface InfoPanelProps { title?: string; heading?: string; link?: string; href?: string; children: React.ReactNode }
export interface NewsCardProps { image?: string; alt?: string; tags?: string[]; title: string; date?: string; elevated?: boolean }
export interface ResultCardProps { type: ContentType; pill?: boolean; title: string; href?: string; description?: string; meta?: string; metaIcon?: string; image?: string; counts?: Array<{ icon?: string; label: string }> }
export interface SummaryNavCardProps { icon?: string; title: string; subtitle?: string; href?: string }
export interface TestimonialProps { name: string; role?: string; avatar?: string; children: React.ReactNode }
export interface ChecklistItemProps { children: React.ReactNode }
export interface ContactAccordionProps { name: string; open?: boolean; children: React.ReactNode }
export type QueryNode = { op: string; note?: string; children: QueryNode[] } | { field: string; value: string };
export interface QueryTreeProps { query: QueryNode }
export interface PaginationProps { page?: number; total?: number }
export interface TabsProps { items: Array<string | { label: string; icon?: string }>; active?: string }
export interface SiteHeaderProps { nav?: string[]; categories?: string[]; activeCategory?: string; filters?: string[] }
export interface LogoProps { variant?: 'full' | 'mark'; height?: number }
export interface IconProps { name: string; size?: number; title?: string; className?: string }
export interface DividerProps { variant?: 'accent' | 'full' }
export declare const Button: React.FC<ButtonProps>;
export declare const NavArrow: React.FC<NavArrowProps>;
export declare const SocialLinks: React.FC<SocialLinksProps>;
export declare const TextLink: React.FC<TextLinkProps>;
export declare const Pill: React.FC<PillProps>;
export declare const TypeLabel: React.FC<TypeLabelProps>;
export declare const Tag: React.FC<TagProps>;
export declare const CountTag: React.FC<CountTagProps>;
export declare const DOI: React.FC<DOIProps>;
export declare const OperatorTag: React.FC<OperatorTagProps>;
export declare const Chip: React.FC<ChipProps>;
export declare const FilterChip: React.FC<FilterChipProps>;
export declare const Tooltip: React.FC<TooltipProps>;
export declare const SearchBar: React.FC<SearchBarProps>;
export declare const FilterTab: React.FC<FilterTabProps>;
export declare const Toggle: React.FC<ToggleProps>;
export declare const Checkbox: React.FC<CheckboxProps>;
export declare const Select: React.FC<SelectProps>;
export declare const RadioGroup: React.FC<RadioGroupProps>;
export declare const FilterPanel: React.FC<FilterPanelProps>;
export declare const FilterPopover: React.FC<FilterPopoverProps>;
export declare const InfoPanel: React.FC<InfoPanelProps>;
export declare const NewsCard: React.FC<NewsCardProps>;
export declare const ResultCard: React.FC<ResultCardProps>;
export declare const SummaryNavCard: React.FC<SummaryNavCardProps>;
export declare const Testimonial: React.FC<TestimonialProps>;
export declare const ChecklistItem: React.FC<ChecklistItemProps>;
export declare const ContactAccordion: React.FC<ContactAccordionProps>;
export declare const QueryTree: React.FC<QueryTreeProps>;
export declare const Pagination: React.FC<PaginationProps>;
export declare const Tabs: React.FC<TabsProps>;
export declare const SiteHeader: React.FC<SiteHeaderProps>;
export declare const Logo: React.FC<LogoProps>;
export declare const Icon: React.FC<IconProps>;
export declare const Divider: React.FC<DividerProps>;
