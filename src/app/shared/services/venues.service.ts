import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { venue } from '../../models/venue';

@Injectable({
  providedIn: 'root',
})
export class VenuesService {
  collectionName = 'Venues';

  constructor(private afs: AngularFirestore) {}

  create(venue: venue) {
    return this.afs
      .collection<venue>(this.collectionName)
      .doc(venue.id)
      .set(venue);
  }

  getAll() {
    return this.afs.collection<venue>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs
      .collection<venue>(this.collectionName)
      .doc(id)
      .valueChanges();
  }

  update(venue: venue) {
    return this.afs
      .collection<venue>(this.collectionName)
      .doc(venue.id)
      .set(venue);
  }

  delete(id: string) {
    return this.afs.collection<venue>(this.collectionName).doc(id).delete();
  }
}
