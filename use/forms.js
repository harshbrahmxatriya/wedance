import { venueFields } from '~/use/venues'
import { offerFields } from '~/use/offers'
import { useProfiles } from '~/use/profiles'
import { playlistFields } from '~/use/playlists'

export function getFields(collection) {
  if (collection === 'venues') {
    return venueFields
  }

  if (collection === 'offers') {
    return offerFields
  }

  if (collection === 'playlists') {
    return playlistFields
  }

  if (collection === 'profiles') {
    const { profileFields } = useProfiles()

    return profileFields
  }

  return []
}
