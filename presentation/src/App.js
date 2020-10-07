import React from 'react';
import './App.css';
import { Deck, Slide, Text, Footer, Title, Image, List, Columns, Subtitle } from "@sambego/diorama";
import ImageWithTitle from "./components/ImageWithTitle";
import About from "./slides/About";
import CodeSlide from './components/CodeSlide';
import ThankYou from "./slides/ThankYou";
import { XTerm } from "./components/XTerm";

import ImgMarioStar from "./assets/mario-star.png";
import ImgCICDFlow from "./assets/ci-cd-flow.png";
import ImgTekton from "./assets/Tekton.png";
import ImgGettingStarted from "./assets/blow.gif";
import ImgPushStart from "./assets/push-start.jpg";
import ImgMarioWoohoo from "./assets/mario-woohoo.jpg";
import ImgSelectPlayers from "./assets/select-players.jpg";
import ImgGameGenie from "./assets/gamegenie.gif";
import ImgPipe from "./assets/pipe.png";
import ImgBackwards from "./assets/backwards.gif";
import ImgParallel from "./assets/parallel.png";
import ImgVSCode from "./assets/vscode.png";
import ImgCatalog from "./assets/catalog.png";
import ImgTektonHub from "./assets/tekton-hub.png";
import ImgWorkspace from "./assets/workspace.jpg";
import ImgRealWorld from "./assets/realworld.jpg";
import ImgPipelineResources from "./assets/pipeline-resources.png";
import ImgPipeline from "./assets/pipeline.png";
import ImgDeprecated from "./assets/deprecated.gif";
import ImgInfinite from "./assets/infinite-lives.gif";

const SHOW_NOTES = true;

const talkProps = {
  title: "Power-Up With Clouds And Pipelines",
  conference: "Open Source Automation Days",
  conferenceHashTag: "#osad20",
  date: "Oct 21, 2020",
  moreInfoUrl: "http://ezurl.to/pipes-and-clouds"
}

const footer = <Footer left={`@joel__lord ${talkProps.conferenceHashTag}`} right="&nbsp;" />

function App() {
  return (
    <Deck swipeToChange={false} footer={footer} presenterNotes={SHOW_NOTES}>
      <ImageWithTitle 
        title="Power-Up With Clouds And Pipelines" 
        img={ ImgMarioStar } 
        notes="You might have heard about CI/CD by now. This concepts helps you release and deploy faster and more reliably. More and more organizations have now adopted CI/CD as part of their core business processes. Today, I will show you how you can integrate your CI/CD pipeline directly inside your Kubernetes cluster. This can be done with Tekton, a Cloud-Native CI/CD framework. Tekton uses Tasks and Pipelines that you can use in your enterprise cloud. Now, I couldn't help but to make an association here. Clouds. Pipes.... Super Mario. So, I had to theme this application on Super Mario Brothers."
      />

      <About />

      <Slide notes="To define CI/CD, I’ve looked up the Red Hat website and found the following definition which I thought really encapsulates what it’s about.

      CI/CD introduces ongoing automation and continuous monitoring throughout the lifecycle of apps, from integration and testing phases to delivery and deployment.
      ">
        <Title>CI/CD</Title>
        <Text>CI/CD introduces ongoing automation and continuous monitoring throughout the lifecycle of apps, from integration and testing phases to delivery and deployment.</Text>
        <Text> </Text>
        <Text><a href="#">https://www.redhat.com/en/topics/devops/what-is-ci-cd</a></Text>
      </Slide>

      <Slide notes="The acronym CI/CD has a few different meanings. The “CI” in always refers to continuous integration, which is an automation process for developers. Successful CI means new code changes to an app are regularly built, tested, and merged to a shared repository. It’s a solution to the problem of having too many branches of an app in development at once that might conflict with each other.

      The “CD” refers to continuous delivery and/or continuous deployment, which are related concepts that sometimes get used interchangeably. Both are about automating further stages of the pipeline, but they’re sometimes used separately to illustrate just how much automation is happening.
      Continuous delivery usually means a developer’s changes to an application are automatically bug tested and uploaded to a repository, where they can then be deployed to a live production environment by the operations team. It’s an answer to the problem of poor visibility and communication between dev and business teams. To that end, the purpose of continuous delivery is to ensure that it takes minimal effort to deploy new code.

      Continuous deployment (the other possible “CD”) can refer to automatically releasing a developer’s changes from the repository to production, where it is usable by customers. It addresses the problem of overloading operations teams with manual processes that slow down app delivery. It builds on the benefits of continuous delivery by automating the next stage in the pipeline.
      ">
        <Image src={ ImgCICDFlow }></Image>
      </Slide>

      <Slide notes="Cloud-native is such an overloaded term, so let’s talk about what we mean in this context.

      Containers - supports apps that run in containers that are orchestrated by kubernetes
      It must be serverless - Run and scale on demand, without the need for a central CI engine to be maintained and taken care of
      DevOps: they are built with DevOps practices in mind and allow teams to own their delivery pipelines alongside the applications without having to rely on central center of excellence teams that manage delivery pipelines on other teams behalf.

      So we want to be able to build, test, stage, deploy - everything - with those characteristics in mind.
      ">
        <Title>Cloud-Native CI/CD</Title>
        <List>
          <li>Containers</li>
          <li>Serverless</li>
          <li>DevOps</li>
        </List>
      </Slide>

      <Slide notes="
      The one project that we will focus on today, is, let’s face it, the one that has the coolest logo.

      All jokes aside, Tekton is a powerful and flexible open source framework for creating a cloud-native CI/CD system. It integrates into Kubernetes and allows developers to build, test and deploy across cloud providers and on-premise systems.
      
      Looking at all the existing tools, they all have the same things in common. 
      
      You have some inputs, say your code. You perform some task on it. And then you have an output, something like an image that can then be deployed.
      
      Tekton was built with this in mind. 

      It provides us with a set of tools that are composable, declarative, reproducible and cloud native in order to make it easy to build pipelines.

      Tekton adds a few CRDs or Custom Resource Definitions into your Kubernetes cluster, and you can then use those pieces to put your CI/CD pipelines together.
      ">
        <Image src={ ImgTekton } />
      </Slide>

      <ImageWithTitle img={ ImgGettingStarted } title="Getting Started" />

      <Slide>
        <Title>Getting Started</Title>
        <List>
          <li>Kubernetes Cluster (minikube)</li>
          <li>Install CRDs</li>
          <li>`tkn` CLI tool</li>
        </List>
      </Slide>

      <ImageWithTitle img={ ImgPushStart } title="Tasks" />

      <CodeSlide title="Tasks" lang="yaml">
        {`
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
    name: start-game
spec:
        `}
      </CodeSlide>

      <CodeSlide title="Tasks" lang="yaml">
        {`
spec:
  steps:
  - name: press-start
    image: alpine:3.12
    command:
      - /bin/sh
    args: ["-c", "echo Starting game"]
        `}
      </CodeSlide>

      <Slide>
        <Title>Tasks</Title>
        <XTerm />
      </Slide>

      <Slide>
        <Image src={ ImgMarioWoohoo } full />
      </Slide>

      <ImageWithTitle img={ ImgSelectPlayers } title="Steps" />

      <CodeSlide title="Steps" lang="yaml">
        {`
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: start-game
spec:
  steps:
    - name: select-players
      image: alpine:3.12
      command: 
        - /bin/sh
      args: ["-c", "echo Selecting Players"]
    - name: press-start
      image: alpine:3.12
      command:
        - /bin/sh
      args: ["-c", "echo Starting game"]
        `}
      </CodeSlide>

      <Slide>
        <Title>Steps</Title>
        <XTerm />
      </Slide>

      <ImageWithTitle img={ ImgGameGenie } title="Parameters" />

      <CodeSlide title="Parameters" lang="yaml">
        {`
spec:
  params: 
    - name: players
      description: Number of players
      default: "1"
      type: string
        `}
      </CodeSlide>

      <CodeSlide title="Parameters" lang="yaml">
        {`
spec:
  steps:
  - name: select-players
    image: alpine:3.12
    command: 
      - /bin/sh
    args: 
      - "-c"
      - "echo Selecting $(params.players) Players"
        `}
      </CodeSlide>

      <Slide>
        <Title>Parameters</Title>
        <XTerm />
      </Slide>

      <ImageWithTitle title="Pipelines" img={ ImgPipe } />

      <Slide>
        <Image src={ImgPipeline} />
        <Text><a href="#">http://tekton.dev/docs/concepts</a></Text>
      </Slide>
      
      <CodeSlide title="Pipelines" lang="yaml">
        {`
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: defeat-bowser
spec:
  steps:
    - name: defeat-bowser
      image: alpine:3.12
      command: 
        - /bin/sh
      args: 
        - "-c"
        - "echo Battling Bowser && sleep 1 && echo You won"
        `}
      </CodeSlide>

      <CodeSlide title="Pipelines" lang="yaml">
        {`
apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:
  name: play-mario
spec:
        `}
      </CodeSlide>

      <CodeSlide title="Pipelines" lang="yaml">
        {`
  tasks:
    - name: start
      taskRef:
        name: start-game
      params:
        - name: players
          value: "1"
    - name: win
      taskRef:
        name: defeat-bowser
        `}
      </CodeSlide>

      <Slide>
        <Title>Pipelines</Title>
        <XTerm />
      </Slide>

      <ImageWithTitle img={ ImgBackwards } title="Task Sequence" />

      <CodeSlide title="Task Sequence" lang="yaml">
        {`
  tasks:
  - name: start
    taskRef:
      name: start-game
    params:
      - name: players
        value: "1"
  - name: win
    taskRef:
      name: defeat-bowser
    runAfter: 
      - start
        `}
      </CodeSlide>
      
      <Slide>
        <Title>Task Sequence</Title>
        <XTerm />
      </Slide>

      <ImageWithTitle title="Reusable &amp; Parallel Tasks" img={ ImgParallel } />

      <CodeSlide title="Reusable Tasks" lang="yaml">
        {`
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: collect
spec:
  params: 
    - name: object
      description: What should we collect?
      default: coins
      type: string
  steps:
    - name: collect
      image: alpine:3.12
      command: 
        - /bin/sh
      args: ["-c", "R=$(shuf -i 1-5 -n 1); 
          sleep $R && echo collecting $R $(params.object) 
          along the way"]
        `}
      </CodeSlide>

      <CodeSlide title="Reusable Tasks" lang="yaml">
        {`
spec:
  tasks:
    - ...
    - name: collect-coins
      taskRef: 
        name: collect
    - name: collect-mushrooms
      taskRef:
        name: collect
      params:
        - name: object
          value: mushrooms
    - ...
        `}
      </CodeSlide>

      <CodeSlide title="Parallel Tasks" lang="yaml">
        {`
spec:
  tasks:
    - ...
    - name: collect-coins
      taskRef: 
        name: collect
      runAfter: 
        - start
    - name: collect-mushrooms
      taskRef:
        name: collect
      params:
        - name: object
          value: mushrooms
      runAfter: 
      - start
    - ...
        `}
      </CodeSlide>

      <CodeSlide title="Parallel Tasks" lang="yaml">
        {`
spec:
  tasks:
    - ...
    - name: win
      taskRef:
        name: defeat-bowser
      runAfter: 
        - collect-mushrooms
        - collect-coins
        `}
      </CodeSlide>

      <Slide>
        <Image full src={ ImgVSCode } />
      </Slide>
      
      <Slide>
        <Title>Parallel &amp; Reusable Tasks</Title>
        <XTerm />
      </Slide>

      <ImageWithTitle title="Task Catalog" img={ ImgCatalog } />

      <Slide>
      <Columns>
          <div>
            <Image src={ImgTektonHub} style={{width: "50vw", top: "0px"}} color="#ccc" />
          </div>
          <div>
            <Subtitle>Task Catalog</Subtitle>
            <List className="align-left">
              <li>Tekton Hub</li>
              <li>Github Repo</li>
            </List>
          </div>
        </Columns>
      </Slide>

      <ImageWithTitle img={ImgDeprecated} title="Pipeline Resources" />

      <Slide>
        <Title>Pipeline Resources</Title>
        <List>
          <li>Acts as an input or output to the Pipeline</li>
          <li>Haven't moved alpha -&gt; beta</li>
          <li>Likely to be replaced by Workspaces</li>
        </List>
      </Slide>

      <Slide>
        <Image src={ImgPipelineResources} />
        <Text><a href="#">http://tekton.dev/docs/concepts</a></Text>
      </Slide>

      <ImageWithTitle title="Workspaces" img={ ImgWorkspace } />

      <CodeSlide title="Workspaces (Task)" lang="yaml">
        {`
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: start-game
spec:
  workspaces:
    - name: level
  tasks:
    ...
    - name: show-level
    image: alpine:3.12
    command: 
      - /bin/sh
    args: [
      - "-c"
      - "echo Starting level $(cat $(workspaces.level.path)/level.txt)"
        `}
      </CodeSlide>

      <CodeSlide title="Workspace (Pipeline)" lang="yaml">
        {`
spec:
  workspaces:
    - name: level-ws
      persistentVolumeClaim:
          name: tekton-pvc
  tasks:
    - name: fetch-level
      taskRef: 
        name: git-clone
      workspaces:
        - name: output
          workspace: level-ws
      params:
        - name: url
          value: https://github.com/joellord/pipes-and-clouds        `}
      </CodeSlide>

      <Slide>
        <Title>Workspaces</Title>
        <XTerm />
      </Slide>

      <ImageWithTitle title="Real World Examples" img={ ImgRealWorld } />

      <Slide>
        <Title>Real World Examples</Title>
        <List>
          <li>Clone a repository</li>
          <li>Perform Unit Tests</li>
          <li>Compile Code</li>
          <li>Build Image</li>
          <li>Deploy to Cluster</li>
        </List>
      </Slide>

      <Slide>
        <Title>Real World Example</Title>
        <XTerm />
      </Slide>

      <Slide>
        <Title>Recap</Title>
        <List>
          <li>Cloud Native CI/CD Framework</li>
          <li>Uses Steps, Tasks, Pipelines and Workspaces</li>
        </List>
      </Slide>

      <Slide>
        <Image src={ImgInfinite} full />
      </Slide>

      <ThankYou
        title={talkProps.title}
        conference={talkProps.conference}
        date={talkProps.date}
        moreInfoUrl={talkProps.moreInfoUrl}
      />
    </Deck>
  );
}

export default App;
