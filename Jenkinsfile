pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building the application'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing the application'
            }
        }
        
        stage('Run') {
            steps {
                echo 'Running the application'
                sh "chmod +x /usr/local/bin/docker-compose"
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline execution completed'
        }
    }
}
