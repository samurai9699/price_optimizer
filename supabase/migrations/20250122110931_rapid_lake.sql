/*
  # Create Products Schema

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `name` (text)
      - `current_price` (decimal)
      - `min_price` (decimal)
      - `max_price` (decimal)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `price_history`
      - `id` (uuid, primary key)
      - `product_id` (uuid, references products)
      - `price` (decimal)
      - `changed_at` (timestamptz)
    
    - `competitor_prices`
      - `id` (uuid, primary key)
      - `product_id` (uuid, references products)
      - `competitor_name` (text)
      - `price` (decimal)
      - `recorded_at` (timestamptz)
    
    - `price_recommendations`
      - `id` (uuid, primary key)
      - `product_id` (uuid, references products)
      - `recommended_price` (decimal)
      - `confidence_score` (decimal)
      - `reason` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  name text NOT NULL,
  current_price decimal NOT NULL,
  min_price decimal NOT NULL,
  max_price decimal NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Price history table
CREATE TABLE IF NOT EXISTS price_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id),
  price decimal NOT NULL,
  changed_at timestamptz DEFAULT now()
);

-- Competitor prices table
CREATE TABLE IF NOT EXISTS competitor_prices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id),
  competitor_name text NOT NULL,
  price decimal NOT NULL,
  recorded_at timestamptz DEFAULT now()
);

-- Price recommendations table
CREATE TABLE IF NOT EXISTS price_recommendations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id),
  recommended_price decimal NOT NULL,
  confidence_score decimal NOT NULL,
  reason text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE price_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE competitor_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE price_recommendations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can manage their own products"
  ON products
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view price history for their products"
  ON price_history
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM products
    WHERE products.id = price_history.product_id
    AND products.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert price history for their products"
  ON price_history
  FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM products
    WHERE products.id = price_history.product_id
    AND products.user_id = auth.uid()
  ));

CREATE POLICY "Users can view competitor prices for their products"
  ON competitor_prices
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM products
    WHERE products.id = competitor_prices.product_id
    AND products.user_id = auth.uid()
  ));

CREATE POLICY "Users can manage competitor prices for their products"
  ON competitor_prices
  FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM products
    WHERE products.id = competitor_prices.product_id
    AND products.user_id = auth.uid()
  ));

CREATE POLICY "Users can view recommendations for their products"
  ON price_recommendations
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM products
    WHERE products.id = price_recommendations.product_id
    AND products.user_id = auth.uid()
  ));

CREATE POLICY "Users can manage recommendations for their products"
  ON price_recommendations
  FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM products
    WHERE products.id = price_recommendations.product_id
    AND products.user_id = auth.uid()
  ));