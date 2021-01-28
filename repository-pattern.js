
// Helper factory function to make some mock entities
function makeEntity(id, name) {
    return {
        id, 
        name
    }
}

// Just abstract class for future repositories. 
// This kind of operation simulate some abstraction instead of using interface
// If you are interested in more static type implementation look at my TypeScript repository
class VideoRepository {}

// Example implementation of VideoRepository wchich fetch some data
// from local database or so.
class LocalVideoRepository extends VideoRepository {
    availableVideos() {
        return [
             makeEntity(0, 'testvideo0.mp4'),
             makeEntity(1, 'testvideo1.mp4')
        ]
    }
}

// Service which communicate with data provider,
// fetch the data and return its to interactor/viewmodel
class VideoSelectorService {
    constructor(repository) {
        if (repository instanceof VideoRepository) {
            this.repository = repository
        } else {
            throw Error('Selected repository not match required type \\EntityRepository\\')
        }
    }

    fetchAll() {
        return this.repository.availableVideos();
    }
}

// Business logic for concrete view/component. 
// This component communicate with service and map data to most appropriate format.
class VideoSelectorInteractor {
    constructor(selectorService) {
        this.selectorService = selectorService
    }

    viewNeedRendering() {
        return this.selectorService.fetchAll();
    }
}

// Humble view component
// This component is responsible only for rendering data
class VideoComponentViewRenderer {
    constructor(interactor) {
        this.interactor = interactor;
    }

    render() {

        const entitiesToRender = this.interactor
            .viewNeedRendering()
            .map((entitiy) => entitiy.name);

        console.log(`Entities to render ${entitiesToRender}`);

        // render some HTML
    }
}

// Sample factory function to build proposed hierarchy
// If new business requirement will require to fetch videos from another database eg. IMDB
// then we could simply implement new repository and inject to VideoSelectorService based on
// concrete requirements. Only repository will change without impact of lower lever components.
// Open-Close principle is respected - lower level component does not depend on higher lever component.
function videoComponentViewFactory(respository) {
    
    const entitiySelectorService = new VideoSelectorService(respository);
    const interactor = new VideoSelectorInteractor(entitiySelectorService);

    return new VideoComponentViewRenderer(interactor);
}

const renderer = videoComponentViewFactory(new LocalVideoRepository());
renderer.render();