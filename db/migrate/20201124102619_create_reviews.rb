class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :content

      t.references :product, foreign_key: true

      t.timestamps
    end
  end
end
