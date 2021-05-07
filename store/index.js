/**
 * global application state properties, also see other stores for state submodules
 */

export const state = () => ({
  // true if any Solr docs query is in progress
  loading: false,

  // true if any Solr facets query is in progress
  loadingFacets: false,

  // debug mode for local development
  debug: true,

  // last Solr query times
  QTime: {
    docs: 0,
    facets: 0
  }
})

export const getters = {
  isLoading: state => state.loading && state.loading === true,
  isLoadingFacets: state => state.loadingFacets && state.loadingFacets === true
}

export const mutations = {
  START_REQUEST: (state) => {
    state.loading = true
  },

  END_REQUEST: (state) => {
    state.loading = false
  },

  START_FACET_REQUEST: (state) => {
    state.loadingFacets = true
  },

  END_FACET_REQUEST: (state) => {
    state.loadingFacets = false
  },

  RECEIVE_DOCS_QTIME: (state, QTime) => {
    state.QTime.docs = QTime
  },

  RECEIVE_FACETS_QTIME: (state, QTime) => {
    state.QTime.facets = QTime
  }
}

export const actions = {}
