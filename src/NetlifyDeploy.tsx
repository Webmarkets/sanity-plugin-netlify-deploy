import React from 'react'
import {PublishIcon} from '@sanity/icons'
import {Flex, Container, Heading, Text, Card, Button as SanityButton} from '@sanity/ui'

export default function NetlifyDeploy() {
  const siteID = ''
  const siteURL = ''
  const deployNetlify = async () => {
    await fetch(`https://api.netlify.com/build_hooks/${siteID}`, {
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
              <img src={`https://api.netlify.com/api/v1/badges/${siteID}/deploy-status`} />
            </Card>
            <a href={siteURL} target="_blank" rel="noopener noreferrer">
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
