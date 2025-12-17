import type { FC } from 'react'

export type LayoutTabId = 'layout' | 'faces' | 'view3d'

interface LayoutTabsProps {
  activeTab: LayoutTabId
  onChange: (tab: LayoutTabId) => void
}

export const LayoutTabs: FC<LayoutTabsProps> = ({ activeTab, onChange }) => {
  const base =
    'relative py-1.5 px-3 text-xs font-medium rounded-md transition-colors cursor-pointer border border-transparent'

  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
      <div className="flex gap-1">
        <button
          type="button"
          onClick={() => onChange('layout')}
          className={`${base} ${
            activeTab === 'layout'
              ? 'bg-slate-800 text-sky-200 border-slate-600'
              : 'bg-transparent text-slate-400 hover:bg-slate-900 hover:text-slate-100'
          }`}
        >
          2D Layout
        </button>
        <button
          type="button"
          onClick={() => onChange('faces')}
          className={`${base} ${
            activeTab === 'faces'
              ? 'bg-slate-800 text-sky-200 border-slate-600'
              : 'bg-transparent text-slate-400 hover:bg-slate-900 hover:text-slate-100'
          }`}
        >
          Faces list
        </button>
        <button
          type="button"
          onClick={() => onChange('view3d')}
          className={`${base} ${
            activeTab === 'view3d'
              ? 'bg-slate-800 text-sky-200 border-slate-600'
              : 'bg-transparent text-slate-400 hover:bg-slate-900 hover:text-slate-100'
          }`}
        >
          3D View
        </button>
      </div>
      <span className="text-[11px] text-slate-500">Box Maker preview</span>
    </div>
  )
}
