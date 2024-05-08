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
                sh "docker-compose up"
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline execution completed'
        }
    }
}
