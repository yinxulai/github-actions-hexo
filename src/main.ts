import { wait } from './wait'
import * as core from '@actions/core'

interface Config {
  'copy-form-branch': string
  'copy-to-branch': string
  'deploy-branch': string
  'build-branch': string
}

function getInput(name: keyof Config): Config[keyof Config] {
  return core.getInput(name)
}

async function getInputConfig(): Promise<Config> {
  return {
    'copy-form-branch': getInput('copy-form-branch'),
    'copy-to-branch': getInput('copy-to-branch'),
    'deploy-branch': getInput('deploy-branch'),
    'build-branch': getInput('build-branch')
  }
}

async function runCopys(config: Pick<Config, 'copy-form-branch' | 'copy-to-branch'>) {

}

async function runDeploy(config: Pick<Config, 'deploy-branch'>) {

}


async function runBuild(config: Pick<Config, 'build-branch'>) { }



async function run(): Promise<void> {
  try {
    const config = await getInputConfig()
    await runCopys(config)
    await runBuild(config)
    await runDeploy(config)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
