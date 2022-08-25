impl Solution {
    pub fn can_construct(ransom_note: String, magazine: String) -> bool {
        let mut w: [usize; 256] = [0; 256];
        for c in magazine.chars().map(|c| (c as u8) as usize) {
            w[c] += 1;
        }
        for c in ransom_note.chars().map(|c| (c as u8) as usize) {
            if w[c] == 0 {
                return false;
            }
            w[c] -= 1;
        }
        true
    }
}