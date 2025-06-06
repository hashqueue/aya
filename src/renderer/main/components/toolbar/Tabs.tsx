import LunaTab, { LunaTabItem } from 'luna-tab/react'
import { observer } from 'mobx-react-lite'
import map from 'licia/map'
import { t } from '../../../../common/util'
import Style from './Tabs.module.scss'
import store from '../../store'

export default observer(function Panels() {
  const tabItems = map(
    [
      'overview',
      'file',
      'application',
      'process',
      'performance',
      'shell',
      'layout',
      'screenshot',
      'logcat',
      'webview',
    ],
    (panel) => {
      return (
        <LunaTabItem
          key={panel}
          id={panel}
          title={t(panel)}
          selected={panel === store.panel}
        />
      )
    }
  )

  return (
    <LunaTab
      className={Style.container}
      height={31}
      onSelect={(panel) => store.selectPanel(panel)}
    >
      {tabItems}
    </LunaTab>
  )
})
