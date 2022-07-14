import React from 'react'
import {PublishIcon} from '@sanity/icons'
import {Flex, Container, Heading, Text, Card, Button as SanityButton} from '@sanity/ui'

export default function NetlifyDeploy() {
  const deployNetlify = async () => {
    await fetch('https://api.netlify.com/build_hooks/62a02b6b7d15e52aab82663f', {
      method: 'POST',
    })
  }

  return (
    <Container display="grid" width={0} style={{maxWidth: '860px'}}>
      <Flex direction="column" padding={4}>
        <Flex align="center" justify="space-between">
          <Card padding={4}>
            <Heading as="h2">Production</Heading>
            <Card paddingTop={2}>
              <img src="https://api.netlify.com/api/v1/badges/3d435c5f-9a68-4754-a50c-cefb1221791a/deploy-status" />
            </Card>
            <a href="https://westsidepizza.com" target="_blank" rel="noopener noreferrer">
              <Card paddingTop={4}>
                <Text>View Site</Text>
              </Card>
            </a>
          </Card>
          <Card padding={4}>
            <SanityButton
              tone="positive"
              onClick={deployNetlify}
              icon={PublishIcon}
              fontSize={[2, 2, 3]}
              padding={[3, 3, 4]}
              text="Deploy to Netlify"
            />
          </Card>
        </Flex>
      </Flex>
    </Container>
  )
}
