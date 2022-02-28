pipeline{

    agent any
    
    options {
        ansiColor('xterm')
    }

    stages{

        stage('Building'){
            
            steps{
                 echo "Building the application"
            }
           
        }

        stage("API Testing"){

            steps{
                script{
                    git url: "https://github.com/henriquelh1/Wooga.git"
                    sh:"npm install"
                    sh:"npm update"
                    sh:"npm run alltests-headless"
                }
            }
        }

        stage("Deploying"){

            steps{
                echo "Deploying the application"
            }
        }
    }


}
