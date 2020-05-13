@Library('sofie-jenkins-lib') _

pipeline {
  agent any
  stages {
    stage('Version') {
      when {
        branch 'master'
      }
      steps {
        sisyfosRelease()
      }
    }
    stage('Build') {
      steps {
        sofieSlackSendBuildStarted()
        dockerBuild('sofie/tv-automation-sisyfos-audio-controller')
      }
    }
    stage('Deploy') {
      when {
        branch 'stage'
      }
      steps {
        parallel(
          test01: {
            coreDeploy('malxsofietest01')
          },
          test02: {
            coreDeploy('malxsofietest02')
          }
        )
      }
    }
  }
  post {
    failure {
      sofieSlackSendBuildFailure()
    }
    success {
      sofieSlackSendBuildSuccess()
    }
  }
}
