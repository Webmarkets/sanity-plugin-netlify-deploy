import {createPlugin} from 'sanity'
import RocketIcon from './RocketIcon'
import NetlifyDeploy from './NetlifyDeploy'

interface MyPluginConfig {
  /* nothing here yet */
}

export const netlifyDeploy = createPlugin<MyPluginConfig | void>((config = {}) => {
  return {
    tools: (prev, context) => {
      return [
        ...prev,
        {
          name: 'sanity-plugin-testing-it-out',
          tool: NetlifyDeploy,
          title: 'Deploy',
          icon: RocketIcon,
          component: NetlifyDeploy,
        },
      ]
    },
  }
})
